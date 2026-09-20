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
		"content": `<style>.z1c-rtbqo {
  fill: currentColor;
  d: path("M5.262 19q-.48 0-.702-.416q-.223-.417.025-.82l6.738-10.78q.243-.378.677-.378t.677.378l6.739 10.78q.248.403.025.82q-.224.416-.703.416z");
}
</style><path class="z1c-rtbqo"/>`,
		"fallback": "material-symbols-light:change-history-rounded",
	});
}

export default Component;
