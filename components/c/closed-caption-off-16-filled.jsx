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
		"content": `<style>.kw3omlb4k {
  fill: currentColor;
  d: path("m12.293 13l1.853 1.854a.5.5 0 0 0 .708-.708l-13-13a.5.5 0 1 0-.708.708l1.355 1.354A2.5 2.5 0 0 0 1 5.5v5A2.5 2.5 0 0 0 3.5 13zM5.822 6.53a.8.8 0 0 0-.198.067C5.337 6.741 5 7.135 5 8s.337 1.26.624 1.403a.8.8 0 0 0 .922-.157a.5.5 0 1 1 .708.708c-.55.55-1.382.691-2.078.343C4.463 9.941 4 9.135 4 8c0-1.072.413-1.85 1.06-2.233zm3.802.067c-.151.076-.316.22-.438.467l5.141 5.142A2.5 2.5 0 0 0 15 10.5v-5A2.5 2.5 0 0 0 12.5 3H5.121l3.336 3.335c.19-.277.435-.49.72-.632a1.8 1.8 0 0 1 2.077.343a.5.5 0 0 1-.708.708a.795.795 0 0 0-.922-.157");
}
</style><path class="kw3omlb4k"/>`,
		"fallback": "fluent:closed-caption-off-16-filled",
	});
}

export default Component;
