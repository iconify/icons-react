import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.eqky58b0k {
  d: path("M12.003 3L4.125 7.502v9L12.003 21l7.872-4.499v-9zm5.54 12.168l-5.54 3.165l-5.543-3.165V8.832l5.543-3.165l5.54 3.165z");
}

.euc7iobwc {
  fill: var(--svg-color--051221, #051221);
}

.p42005s0t {
  d: path("m15.676 14.104l-3.677 2.1l-3.68-2.1V9.9l3.68-2.103L15.676 9.9l-1.53.875l-2.147-1.228l-2.147 1.228v2.45L12 14.454l2.146-1.228z");
}
</style><g class="euc7iobwc"><path class="eqky58b0k"/><path class="p42005s0t"/></g>`,
		"fallback": "token-branded:cronos",
	});
}

export default Component;
