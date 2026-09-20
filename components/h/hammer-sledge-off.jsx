import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.cuyn6tgcc {
  fill: currentColor;
}

.d2kvgvbvc {
  fill-rule: evenodd;
}

.s7nmcutsy {
  d: path("M10.033.555a2 2 0 0 1 1.225.43l6.863 5.416a2 2 0 0 1 .703 1.091l.19.774a2 2 0 0 1-.371 1.717l-2.492 3.158a2 2 0 0 1-1.584.76l-.796-.005a2 2 0 0 1-1.225-.43L5.683 8.05a2 2 0 0 1-.703-1.09l-.19-.774a2 2 0 0 1 .371-1.718l2.492-3.157A2 2 0 0 1 9.237.55zm6.85 7.416l-6.864-5.416l-.796-.005L6.73 5.707l.19.773l6.864 5.416l.796.006l2.492-3.158z");
}

.tmm4e1bia {
  d: path("m9.028 10.061l-5.262 6.668l.785.62l5.262-6.669l1.57 1.24l-5.262 6.667a2 2 0 0 1-2.809.331l-.785-.62a2 2 0 0 1-.33-2.808l5.26-6.668zm4.491-5.691l.93-1.178l.784.62l-.93 1.177l1.571 1.239l.93-1.178a2 2 0 0 0-.332-2.809l-.785-.619a2 2 0 0 0-2.809.331l-.93 1.178z");
}

.xedf9ccsf {
  d: path("M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z");
}
</style><g class="cuyn6tgcc"><g clip-rule="evenodd" class="d2kvgvbvc"><path class="s7nmcutsy"/><path class="tmm4e1bia"/></g><path class="xedf9ccsf"/></g>`,
		"fallback": "pepicons-pop:hammer-sledge-off",
	});
}

export default Component;
