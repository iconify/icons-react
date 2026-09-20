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
		"content": `<style>.h4yv3jbtj {
  fill: var(--svg-color--2c6190, #2c6190);
  d: path("M12.264 12.15L6.375 9.67v1.977l5.889 2.413l8.174-3.75v2.608l-8.174 3.72l-5.889-2.48v1.883l5.889 2.436l8.174-3.676v2.437L12.264 21l-8.701-3.549v-11.5L12 3l8.438 2.95v2.48z");
}
</style><path class="h4yv3jbtj"/>`,
		"fallback": "token-branded:el",
	});
}

export default Component;
