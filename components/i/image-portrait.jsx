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
		"content": `<style>.p-b9r4b_t {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M8.5 1.75h7q1.76 0 3.005 1.245T19.75 6v12q0 1.373-.757 2.432L10.03 11.47q-.105-.106-.243-.163T9.5 11.25t-.287.057t-.243.163l-4.5 4.5q-.106.105-.163.243q-.057.137-.057.287V6q0-1.76 1.245-3.005T8.5 1.75m3.75 5.75q0 2.25 2.25 2.25t2.25-2.25t-2.25-2.25t-2.25 2.25M9.5 13.061l8.432 8.432q-1.059.757-2.432.757h-7q-1.76 0-3.005-1.245T4.25 18v-1.5q0 .15.057.287q.057.138.163.243q.105.106.243.163T5 17.25t.287-.057t.243-.163z");
}
</style><path class="p-b9r4b_t"/>`,
		"fallback": "uix-solid:image-portrait",
	});
}

export default Component;
