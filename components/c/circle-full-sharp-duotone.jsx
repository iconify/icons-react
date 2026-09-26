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
		"content": `<style>.cuyn6tgcc {
  fill: currentColor;
}

.g9eou3b7p {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M12 1C17.937 1 23 6.0629 23 12C23 17.937 17.937 23 12 23C6.0629 23 1 17.937 1 12C1 6.0629 6.0629 1 12 1Z");
}

.hu05_4bwv {
  d: path("M12 5C15.728 5 19 8.272 19 12C19 15.728 15.728 19 12 19C8.272 19 5 15.728 5 12C5 8.272 8.272 5 12 5Z");
}
</style><g class="cuyn6tgcc"><path class="g9eou3b7p"/><path class="hu05_4bwv"/></g>`,
		"fallback": "keyline-icons:circle-full-sharp-duotone",
	});
}

export default Component;
