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
		"content": `<style>.y9bzs3rih {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.398 29.102L24 43.5L9.602 29.102zM13.858 6.385h9.101v9.101h-9.101zM29.397 4.5l6.435 6.436l-6.435 6.435l-6.435-6.435zM13.858 17.373h9.101v9.101h-9.101zm10.989 0h9.101v9.101h-9.101z");
}
</style><path class="y9bzs3rih"/>`,
		"fallback": "arcticons:iconzy",
	});
}

export default Component;
