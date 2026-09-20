import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.rt-zdmbqk {
  fill: var(--svg-color--39bcd3, #39bcd3);
  d: path("m92.748 135.605l77.82 77.82L127.991 256l-77.82-77.82zm120.677-50.188L256 127.992l-77.82 77.82l-42.575-42.575zM128.008 0l42.575 42.575L42.575 170.583L0 128.008z");
}
</style><path class="rt-zdmbqk"/>`,
		"fallback": "logos:componentkit",
	});
}

export default Component;
