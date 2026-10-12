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
		"content": `<style>.l44k4ob0f {
  fill: var(--svg-color--ff4500, #ff4500);
  d: path("M256 256H0V0h256z");
}

.n4ge-7bey {
  fill: var(--svg-color--fff, #fff);
  d: path("m161.167 67.17l21.228 21.222v22.994l-14.152 14.146l17.69 17.69v24.76l-21.223 21.222H70.968l.005-122.035zm-54.712 73.497v8.96h35.84v-8.96zm35.84-39.291h-35.84v8.96h35.84z");
}
</style><path class="l44k4ob0f"/><path class="n4ge-7bey"/>`,
		"fallback": "logos:browserbase-icon",
	});
}

export default Component;
