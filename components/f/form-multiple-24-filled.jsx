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

.dxxlvb9vk {
  d: path("M7.25 11.5a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5");
}

.udqh95bff {
  d: path("M6.25 3A3.25 3.25 0 0 0 3 6.25v9a3.25 3.25 0 0 0 3.25 3.25h9a3.25 3.25 0 0 0 3.25-3.25v-9A3.25 3.25 0 0 0 15.25 3zM5 12.25a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0m5.5 0a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75M5 7.75A.75.75 0 0 1 5.75 7h10a.75.75 0 0 1 0 1.5h-10A.75.75 0 0 1 5 7.75");
}

.ulrghhxuq {
  d: path("M8.75 21a3.25 3.25 0 0 1-2.74-1.5h9.74a3.75 3.75 0 0 0 3.75-3.75V6.011a3.25 3.25 0 0 1 1.5 2.74v7A5.25 5.25 0 0 1 15.75 21z");
}
</style><g class="cuyn6tgcc"><path class="dxxlvb9vk"/><path class="udqh95bff"/><path class="ulrghhxuq"/></g>`,
		"fallback": "fluent:form-multiple-24-filled",
	});
}

export default Component;
