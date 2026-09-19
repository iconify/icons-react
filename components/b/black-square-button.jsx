import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.dq9mg1bho {
  fill: var(--svg-color--405866, #405866);
  d: path("M63.932 57.1a6.89 6.89 0 0 1-6.893 6.896H6.889A6.893 6.893 0 0 1 0 57.1V6.96A6.89 6.89 0 0 1 6.889.067h50.15a6.89 6.89 0 0 1 6.893 6.893z");
}

.ptg3bubdd {
  fill: var(--svg-color--fff, #fff);
  d: path("M46.48 13.524H17.44a3.99 3.99 0 0 0-3.99 3.99v29.04a3.994 3.994 0 0 0 3.99 3.994h29.04a3.993 3.993 0 0 0 3.989-3.994v-29.04a3.99 3.99 0 0 0-3.989-3.99");
}
</style><path class="dq9mg1bho"/><path class="ptg3bubdd"/>`,
		"fallback": "emojione-v1:black-square-button",
	});
}

export default Component;
