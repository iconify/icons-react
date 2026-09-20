import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

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

.k8fiy6bnz {
  d: path("m15.374 5.986l-5 9c-.647 1.165-2.396.194-1.748-.972l5-9c.647-1.165 2.396-.194 1.748.972");
}

.wtkeqgbos {
  d: path("m5.125 9.72l5 4c1.04.832-.209 2.394-1.25 1.56l-5-4c-1.04-.832.209-2.394 1.25-1.56");
}
</style><g class="cuyn6tgcc"><path class="k8fiy6bnz"/><path class="wtkeqgbos"/></g>`,
		"fallback": "pepicons-pop:checkmark",
	});
}

export default Component;
