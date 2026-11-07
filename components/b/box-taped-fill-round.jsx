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
		"content": `<style>.jx2dox48j {
  fill: currentColor;
  d: path("m9.758 3.107l-1.129-.558l2.043-1.008a3 3 0 0 1 1.312-.31h.032c.456.002.904.108 1.312.31L20.333 5q.311.154.579.373l-3.283 1.621ZM8.629 4.78l6.742 3.329L12 9.774L3.088 5.373q.268-.22.578-.373l.006-.003l2.699-1.332ZM4 8.054l7 3.456v11.089a3 3 0 0 1-.324-.137l-.004-.003l-7-3.456A3 3 0 0 1 2 16.313V7.687q0-.299.057-.593Zm9 3.456l8.943-4.416q.057.294.057.593v8.626a3 3 0 0 1-1.672 2.69l-7 3.456l-.004.002a3 3 0 0 1-.324.138Z");
}
</style><path class="jx2dox48j"/>`,
		"fallback": "coolicons:box-taped-fill-round",
	});
}

export default Component;
