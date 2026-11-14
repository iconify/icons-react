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
		"content": `<style>.yoi06dhqc {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M11.726 4.837q.907-.946 2.028-.269q1.122.676.708 1.919l-.592 1.776q-.122.364.103.676q.224.311.608.311h1.909q1.485.001 2.069 1.367q.583 1.365-.444 2.438l-5.841 6.108q-.907.946-2.028.269q-1.122-.676-.708-1.919l.592-1.776q.122-.364-.103-.676q-.224-.311-.608-.311H7.51q-1.485-.001-2.069-1.367q-.583-1.365.444-2.438z");
}
</style><path class="yoi06dhqc"/>`,
		"fallback": "uix-solid:flash-on",
	});
}

export default Component;
