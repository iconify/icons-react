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

.knsutxbjb {
  fill-rule: evenodd;
  d: path("M2 8L18 8C18.5523 8 19 8.4477 19 9L19 19C19 19.5523 18.5523 20 18 20L2 20C1.4477 20 1 19.5523 1 19L1 9C1 8.4477 1.4477 8 2 8ZM5 10L5 18L7 18L7 10L5 10ZM9 10L9 18L11 18L11 10L9 10ZM13 10L13 18L15 18L15 10L13 10Z");
}

.r4wo6ufpi {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M1 19L1 9C1 8.7348 1.1054 8.4804 1.2929 8.2929L5.2929 4.2929C5.4804 4.1054 5.7348 4 6 4L22 4C22.5523 4 23 4.4477 23 5L23 15C23 15.2652 22.8946 15.5196 22.7071 15.7071L18.7071 19.7071C18.5196 19.8946 18.2652 20 18 20L2 20C1.4477 20 1 19.5523 1 19Z");
}
</style><g class="cuyn6tgcc"><path class="r4wo6ufpi"/><path clip-rule="evenodd" class="knsutxbjb"/></g>`,
		"fallback": "keyline-icons:container-sharp-duotone",
	});
}

export default Component;
