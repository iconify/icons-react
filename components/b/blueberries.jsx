import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tw0-82bnw.css';
import '../../css/y/ydy20f4zg.css';
import '../../css/h/hcztbccpt.css';
import '../../css/x/x64wanbdx.css';
import '../../css/p/ppk9gm36f.css';
import '../../css/p/pox998bug.css';
import '../../css/c/cknn5gbfi.css';
import '../../css/m/myx79is8r.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tw0-82bnw"/><circle class="ydy20f4zg"/><circle class="hcztbccpt"/><path class="x64wanbdx"/><circle class="ppk9gm36f"/><circle class="pox998bug"/><path class="cknn5gbfi"/><circle class="myx79is8r"/></g>`,
		"fallback": "fluent-emoji-flat:blueberries",
	});
}

export default Component;
