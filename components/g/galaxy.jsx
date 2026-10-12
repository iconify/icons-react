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
		"content": `<style>.cagzvcbxe {
  d: path("M12 8.5c.3-.05 1.15-.38 1.78-.32c.63.05 1.39.25 2 .65c.62.39 1.27.99 1.68 1.71c.42.71.76 1.64.82 2.57c.06.92-.07 2.02-.47 2.96c-.39.94-1.06 1.96-1.9 2.7c-.85.73-1.99 1.41-3.17 1.73c-1.17.32-3.25.16-3.9.19M12 15.5c-.3.05-1.15.38-1.78.32c-.63-.05-1.39-.25-2-.65c-.62-.39-1.27-.99-1.68-1.71c-.42-.71-.76-1.64-.82-2.57c-.06-.92.07-2.02.47-2.96c.39-.94 1.06-1.96 1.9-2.7c.85-.73 1.99-1.41 3.17-1.73c1.17-.32 3.25-.16 3.9-.19");
}

.h_tsn8bxt {
  cx: 12px;
  cy: 12px;
  r: 2px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="cagzvcbxe"/><circle class="h_tsn8bxt"/></g>`,
		"fallback": "iconoven:galaxy",
	});
}

export default Component;
