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
		"content": `<style>.uk-t90bsc {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M6.782 4.532h4.072q.917-.001 1.268.847q.35.848-.3 1.495q-.529.53.001 1.06l4.243 4.243q.53.53 1.061 0q.646-.649 1.494-.299t.847 1.269v4.071q0 2.25-2.25 2.25h-4.072q-.917.001-1.268-.847q-.35-.848.3-1.495q.529-.53-.001-1.06l-4.243-4.243q-.53-.53-1.061 0q-.646.649-1.494.299t-.847-1.269V6.782q0-2.25 2.25-2.25");
}
</style><path class="uk-t90bsc"/>`,
		"fallback": "uix-solid:cursor-resize-diagonal",
	});
}

export default Component;
