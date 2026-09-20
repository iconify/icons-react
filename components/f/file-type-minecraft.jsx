import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.d53h4cfga {
  d: path("M24.4 13.2V7.6h-5.6v5.6h-5.6V16h-2.8v8.4h2.8v-2.8h5.6v2.8h2.8V16h-2.8v-2.8zM13.2 7.6H7.6v5.6h5.6z");
}

.dtdg98cqg {
  fill: var(--svg-color--86d562, #86d562);
  d: path("M24.4 13.2h-5.6v.47h5.6zm-5.6 8.4h-5.6v.47h5.6zm2.8 2.8h-2.8v.47h2.8zm-8.4 0h-2.8v.47h2.8zm0-11.2H7.6v.47h5.6z");
}

.iu36h9bbs {
  fill: var(--svg-color--2a641c, #2a641c);
  d: path("M24.4 7.6h-5.6v.47h5.6zm-5.6 5.6h-5.6v.47h5.6zm-5.6-5.6H7.6v.47h5.6zm0 8.4h-2.8v.47h2.8zm8.4 0h-2.8v.47h2.8z");
}

.zjyzt9plt {
  fill: var(--svg-color--52a535, #52a535);
  d: path("M30 2H2v28h28z");
}
</style><path class="zjyzt9plt"/><path class="dtdg98cqg"/><path class="d53h4cfga"/><path class="iu36h9bbs"/>`,
		"fallback": "vscode-icons:file-type-minecraft",
	});
}

export default Component;
