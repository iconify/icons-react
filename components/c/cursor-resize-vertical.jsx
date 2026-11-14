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
		"content": `<style>.of_4gzblj {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("m13.591 3.031l2.878 2.878q.649.646.299 1.494t-1.269.847q-.749 0-.749.75v6q0 .75.75.75q.917-.001 1.268.847q.35.848-.3 1.495l-2.877 2.877q-.659.66-1.591.66t-1.591-.66l-2.878-2.878q-.649-.646-.299-1.494t1.269-.847q.749 0 .749-.75V9q0-.75-.75-.75q-.917.001-1.268-.847q-.35-.848.3-1.495l2.877-2.877q.659-.66 1.591-.66t1.591.66");
}
</style><path class="of_4gzblj"/>`,
		"fallback": "uix-solid:cursor-resize-vertical",
	});
}

export default Component;
