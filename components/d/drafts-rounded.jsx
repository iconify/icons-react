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
		"content": `<style>.uu2ikgb8c {
  fill: currentColor;
  d: path("m12.833 2.677l7.678 4.57q.22.159.354.393q.135.235.135.51v10.235q0 .69-.462 1.153T19.385 20H4.615q-.69 0-1.152-.462T3 18.384V8.15q0-.275.135-.51q.134-.234.354-.394l7.678-4.569q.38-.218.833-.218t.833.218m-.525 9.78L19.8 8l-7.492-4.458q-.154-.096-.308-.096t-.308.096L4.2 8l7.492 4.458q.154.096.308.096t.308-.096");
}
</style><path class="uu2ikgb8c"/>`,
		"fallback": "material-symbols-light:drafts-rounded",
	});
}

export default Component;
