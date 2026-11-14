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
		"content": `<style>.eq95vn-mo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.25 4h7.5A2.25 2.25 0 0 1 19 6.25a2.25 2.25 0 0 1-2.25 2.25h-7.5A2.25 2.25 0 0 1 7 6.25A2.25 2.25 0 0 1 9.25 4m-2 4.5h7.5A2.25 2.25 0 0 1 17 10.75A2.25 2.25 0 0 1 14.75 13h-7.5A2.25 2.25 0 0 1 5 10.75A2.25 2.25 0 0 1 7.25 8.5m6.799 8.587q-.285.202-.617.307q-.333.106-.682.106h-7.5q-.111 0-.221-.011t-.218-.032t-.214-.054t-.208-.074q-.102-.043-.2-.095q-.097-.052-.189-.113t-.177-.132t-.164-.148t-.148-.164q-.07-.085-.132-.177q-.061-.092-.113-.189q-.052-.098-.095-.2q-.042-.102-.074-.208t-.054-.214t-.032-.218T3 15.25t.011-.221t.032-.218q.022-.108.054-.214t.074-.208q.043-.102.095-.2q.052-.097.113-.189t.132-.177q.07-.086.148-.164t.164-.148t.177-.132q.092-.061.189-.113q.098-.052.2-.095q.102-.042.208-.074t.214-.054t.218-.032T5.25 13h7.5q.111 0 .221.011t.218.032t.214.054t.208.074q.102.043.2.095q.097.052.189.113t.177.132q.086.07.164.148t.148.164t.132.177t.113.189t.095.2q.042.102.074.208t.054.214t.032.218t.011.221q0 .217-.042.431M16 21.5c0-4 2-5.5 5.5-5.5c0 3.5-2 5.5-5.5 5.5m0 0l3-3");
}
</style><path class="eq95vn-mo"/>`,
		"fallback": "uix:farm-income",
	});
}

export default Component;
