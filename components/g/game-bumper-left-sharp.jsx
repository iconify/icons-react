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
		"content": `<style>.fodaq8bcs {
  fill: currentColor;
  d: path("M22 4v12q0 1.675-1.175 2.838T18 20H6q-1.675 0-2.838-1.162T2 16V4zm-9.55 11.5l2.85.025q1.05 0 1.75-.513t.7-1.462q0-.725-.387-1.112t-1.013-.563v-.025q.525-.175.8-.587t.275-1.013q0-1.05-.725-1.4t-1.725-.35H12.45zm1.375-4.1V9.625h.975q.55 0 .925.187t.375.688q0 .475-.375.712t-.925.213zm0 2.975V12.4h1.4q.5 0 .825.262t.325.763q0 .475-.288.712t-.787.238zM6.7 15.5h4.45v-1.25H8.075V8.5H6.7z");
}
</style><path class="fodaq8bcs"/>`,
		"fallback": "material-symbols:game-bumper-left-sharp",
	});
}

export default Component;
