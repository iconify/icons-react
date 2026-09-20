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
		"content": `<style>.mt4dlqbwr {
  fill: currentColor;
  d: path("M5.385 17.5h-2.77v-5.538q0-2.244 1.572-3.814t3.818-1.571t3.812 1.57t1.567 3.815V17.5h-2.768v-4.384H12.5v-1.154q0-1.875-1.312-3.188T8 7.462T4.813 8.774T3.5 11.962v1.154h1.885zm11.192 0V7.346H18.5v-.769h1v.77h1.923V17.5zm1-1h2.846zm0 0h2.846V8.346h-2.846z");
}
</style><path class="mt4dlqbwr"/>`,
		"fallback": "material-symbols-light:headphones-battery-outline-sharp",
	});
}

export default Component;
