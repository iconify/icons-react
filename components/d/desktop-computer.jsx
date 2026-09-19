import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.a_9pl_b5m {
  fill: currentColor;
  d: path("M58.25 2H5.75C3.875 2 2 3.875 2 5.75v42.188c0 1.875 1.875 3.75 3.75 3.75H24.5v3.75c0 2.604-3.378 3.75-7.5 3.75V62h30v-2.813c-4.123 0-7.5-1.146-7.5-3.75v-3.75h18.75c1.875 0 3.75-1.875 3.75-3.75V5.75C62 3.875 60.125 2 58.25 2M60 47.938c0 .769-.982 1.75-1.75 1.75H5.75c-.769 0-1.75-.981-1.75-1.75v-3.75h56z");
}

.db_4enbis {
  cx: 32px;
  cy: 47.938px;
  r: 0.938px;
  fill: currentColor;
}
</style><path class="a_9pl_b5m"/><circle class="db_4enbis"/>`,
		"fallback": "emojione-monotone:desktop-computer",
	});
}

export default Component;
