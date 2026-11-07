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
		"content": `<style>.b5cq_pb7e {
  fill: currentColor;
  d: path("M3.088 5.373q.268-.22.578-.373l.006-.003l7-3.456a3 3 0 0 1 1.312-.31h.032c.456.002.904.108 1.312.31L20.333 5q.311.154.579.373L12 9.774ZM4 8.054l7 3.456v11.089a3 3 0 0 1-.324-.137l-.004-.003l-7-3.456A3 3 0 0 1 2 16.313V7.687q0-.299.057-.593Zm9 3.456l8.943-4.416q.057.294.057.593v8.626a3 3 0 0 1-1.672 2.69l-7 3.456l-.004.002a3 3 0 0 1-.324.138Z");
}
</style><path class="b5cq_pb7e"/>`,
		"fallback": "coolicons:box-fill-round",
	});
}

export default Component;
