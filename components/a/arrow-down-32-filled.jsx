import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.x83ogizdt {
  fill: currentColor;
  d: path("M16 3c.69 0 1.25.56 1.25 1.25v20.537l7.628-7.432a1.25 1.25 0 1 1 1.744 1.79l-9.747 9.498a1.3 1.3 0 0 1-.386.258l-.017.007a1.25 1.25 0 0 1-1.347-.266l-9.747-9.497a1.25 1.25 0 0 1 1.744-1.79l7.628 7.432V4.25c0-.69.56-1.25 1.25-1.25");
}
</style><path class="x83ogizdt"/>`,
		"fallback": "fluent:arrow-down-32-filled",
	});
}

export default Component;
