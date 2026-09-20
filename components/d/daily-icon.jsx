import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":301};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.z7kz7tbxp {
  d: path("M0 300.931V217.94L108.451 0H256v83.029L147.603 300.931z");
}
</style><path class="z7kz7tbxp"/>`,
		"fallback": "logos:daily-icon",
	});
}

export default Component;
