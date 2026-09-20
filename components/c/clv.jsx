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
		"content": `<style>.m50ubiwhr {
  fill: var(--svg-color--50c07c, #50c07c);
}

.nk4dd4b0d {
  d: path("M21 16.5a4.5 4.5 0 1 0-9 0a4.5 4.5 0 0 0 9 0");
}

.r0aq5bbad {
  d: path("M12 16.5a4.5 4.5 0 1 0-9 0a4.5 4.5 0 0 0 9 0m9-9a4.5 4.5 0 1 0-9 0a4.5 4.5 0 0 0 9 0");
}

.ysi8z112o {
  d: path("M12 7.5a4.5 4.5 0 1 0-9 0a4.5 4.5 0 0 0 9 0");
}
</style><g class="m50ubiwhr"><path class="ysi8z112o"/><path class="r0aq5bbad"/><path class="nk4dd4b0d"/></g>`,
		"fallback": "token-branded:clv",
	});
}

export default Component;
