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
		"content": `<style>.bevtfm3kx {
  fill: currentColor;
  d: path("M6.913 17.164q-.144-.144-.144-.356v-3.25q-1.573 0-2.671-1.099T3 9.79t1.098-2.672T6.769 6.02h6.077q.213 0 .357.144q.143.144.143.357t-.143.356t-.357.143h-1.5v9.789q0 .212-.144.356t-.356.144t-.356-.144t-.144-.356v-9.79H7.77v9.789q0 .212-.144.356t-.357.144t-.356-.144m10.357 1.464q-.146-.063-.277-.174l-2.523-2.408q-.151-.136-.158-.339t.152-.363q.146-.146.35-.156t.364.131l1.88 1.779V6.519q0-.212.145-.356q.143-.144.356-.144t.356.144t.144.356v10.579l1.88-1.784q.166-.147.364-.134t.344.159q.16.165.153.363t-.172.344l-2.504 2.408q-.13.111-.277.174q-.146.063-.288.063t-.289-.063");
}
</style><path class="bevtfm3kx"/>`,
		"fallback": "material-symbols-light:format-textdirection-vertical-rounded",
	});
}

export default Component;
