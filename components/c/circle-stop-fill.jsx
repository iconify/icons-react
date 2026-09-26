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
		"content": `<style>.x839ghbnz {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M23 12C23 18.0751 18.0751 23 12 23C5.9249 23 1 18.0751 1 12C1 5.9249 5.9249 1 12 1C18.0751 1 23 5.9249 23 12ZM8 11C8 9.343146 9.343146 8 11 8L13 8C14.656854 8 16 9.343146 16 11L16 13C16 14.656854 14.656854 16 13 16L11 16C9.343146 16 8 14.656854 8 13Z");
}
</style><path clip-rule="evenodd" class="x839ghbnz"/>`,
		"fallback": "keyline-icons:circle-stop-fill",
	});
}

export default Component;
