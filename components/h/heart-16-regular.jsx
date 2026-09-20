import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.addyibcdn {
  fill: currentColor;
  d: path("M7.541 3.948a3.25 3.25 0 0 0-4.595-.012a3.25 3.25 0 0 0 .012 4.595l4.707 4.708a.5.5 0 0 0 .707 0l4.683-4.68a3.25 3.25 0 0 0-.012-4.594a3.25 3.25 0 0 0-4.601-.012l-.447.448zm4.805 3.905L8.02 12.178L3.665 7.824a2.25 2.25 0 0 1-.012-3.18a2.25 2.25 0 0 1 3.181.01l.81.81a.5.5 0 0 0 .715-.008l.79-.796a2.25 2.25 0 0 1 3.186.012a2.25 2.25 0 0 1 .011 3.181");
}
</style><path class="addyibcdn"/>`,
		"fallback": "fluent:heart-16-regular",
	});
}

export default Component;
