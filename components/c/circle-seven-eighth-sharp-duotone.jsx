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

.i_ti1acju {
  d: path("M12 12L12 5C15.866 5 19 8.134 19 12C19 15.866 15.866 19 12 19C8.134 19 5 15.866 5 12C5 10.1435 5.7375 8.363 7.0503 7.0503Z");
}
</style><g class="cuyn6tgcc"><path class="g9eou3b7p"/><path class="i_ti1acju"/></g>`,
		"fallback": "keyline-icons:circle-seven-eighth-sharp-duotone",
	});
}

export default Component;
