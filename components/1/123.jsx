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
		"content": `<style>.bx3-s6b4v {
  fill: currentColor;
  d: path("M5.885 14.692v-4.5h-1.5v-.884h2.384v5.384zm3.384 0v-2.307q0-.327.221-.548t.548-.221h2.27v-1.424H9.269v-.884h3.154q.327 0 .548.22q.221.222.221.549v1.539q0 .326-.22.548q-.222.22-.549.22h-2.27v1.424h3.04v.884zm5.923 0v-.884h3.039v-1.423h-2.039v-.77h2.039v-1.423h-3.039v-.884h3.154q.327 0 .548.22q.222.222.222.549v3.846q0 .327-.222.548q-.221.221-.548.221z");
}
</style><path class="bx3-s6b4v"/>`,
		"fallback": "material-symbols-light:123",
	});
}

export default Component;
