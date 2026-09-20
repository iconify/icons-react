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
		"content": `<style>.t6b9b8x1k {
  fill: currentColor;
  d: path("M2.946 3.936a3.25 3.25 0 0 1 4.595.012l.454.453l.447-.448a3.25 3.25 0 0 1 4.6.012a3.25 3.25 0 0 1 .013 4.594l-4.683 4.68a.5.5 0 0 1-.707 0L2.958 8.53a3.25 3.25 0 0 1-.012-4.595m5.073 8.242l4.327-4.325a2.25 2.25 0 0 0-.01-3.181a2.25 2.25 0 0 0-3.187-.012l-.25.252l-.045.052L7.707 6.11l1.647 1.647a.5.5 0 0 1 0 .707l-1.5 1.5a.5.5 0 0 1-.708-.707L8.293 8.11L6.646 6.464a.5.5 0 0 1 0-.707l.645-.645l-.457-.457a2.25 2.25 0 0 0-3.181-.012a2.25 2.25 0 0 0 .012 3.181z");
}
</style><path class="t6b9b8x1k"/>`,
		"fallback": "fluent:heart-broken-16-regular",
	});
}

export default Component;
