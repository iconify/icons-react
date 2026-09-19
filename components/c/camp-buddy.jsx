import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ln7hh_cue {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m22.791 6.246l6.335 9.267l11.109-1.62c1.519-.22 2.536 1.519 1.598 2.734l-6.856 8.889L39.95 35.58c.68 1.377-.66 2.882-2.106 2.366l-10.572-3.774l-8.036 7.839c-1.098 1.072-2.944.263-2.9-1.272l.322-11.22l-9.938-5.22c-1.36-.714-1.16-2.72.313-3.152l10.772-3.16L19.697 6.92c.26-1.513 2.228-1.943 3.094-.676Z");
}
</style><path class="ln7hh_cue"/>`,
		"fallback": "arcticons:camp-buddy",
	});
}

export default Component;
