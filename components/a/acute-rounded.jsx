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
		"content": `<style>.d4l697beo {
  fill: currentColor;
  d: path("M14.816 19q-2.935 0-4.972-2.037t-2.036-4.971q0-2.913 2.037-4.953Q11.88 5 14.816 5q2.913 0 4.952 2.04t2.04 4.952q0 2.934-2.04 4.971T14.816 19m.492-7.189V8.808q0-.213-.144-.356t-.357-.144t-.356.144t-.143.356v3.083q0 .153.058.296q.059.144.189.275l2.366 2.384q.146.166.347.166t.367-.166t.165-.356t-.165-.357zM3.692 8.5q-.212 0-.356-.144t-.144-.357t.144-.356t.356-.143h2.616q.212 0 .356.144t.144.357t-.144.356t-.356.143zm-1 4q-.212 0-.356-.144t-.144-.357t.144-.356t.356-.143h3.616q.212 0 .356.144t.144.357t-.144.356t-.356.143zm1 4q-.212 0-.356-.144t-.144-.357t.144-.356t.356-.143h2.616q.212 0 .356.144t.144.357t-.144.356t-.356.143z");
}
</style><path class="d4l697beo"/>`,
		"fallback": "material-symbols-light:acute-rounded",
	});
}

export default Component;
