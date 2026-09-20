import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.s2w6f5btt {
  fill: currentColor;
  d: path("M4.085 8.755c4.503-.673 7.327-.673 11.83 0l.02.003q.71.106 1.483.235a.5.5 0 1 0 .164-.986q-.584-.098-1.134-.183a1.4 1.4 0 0 0-.077-.221l-1.65-3.712A1.5 1.5 0 0 0 13.35 3h-6.7a1.5 1.5 0 0 0-1.37.89L3.63 7.604q-.05.104-.089.223q-.544.084-1.123.18a.5.5 0 0 0 .164.987a91 91 0 0 1 1.503-.238M3 13.5a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0M5.5 10a3.5 3.5 0 1 0 3.465 4h2.07a3.501 3.501 0 1 0 0-1h-2.07A3.5 3.5 0 0 0 5.5 10m6.5 3.5a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0");
}
</style><path class="s2w6f5btt"/>`,
		"fallback": "fluent:incognito-20-filled",
	});
}

export default Component;
