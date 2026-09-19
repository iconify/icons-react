import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.tpf7yjb3e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.645 7.718h9.893c1.508 0 2.45 1.632 1.697 2.938L25.697 39.302c-.754 1.307-2.64 1.307-3.393 0l-4.382-7.59a1.96 1.96 0 0 1 0-1.958zH7.462c-1.508 0-2.45 1.632-1.697 2.938l4.382 7.59c.35.606.997.98 1.697.98h25.443");
}
</style><path class="tpf7yjb3e"/>`,
		"fallback": "arcticons:appsheet",
	});
}

export default Component;
