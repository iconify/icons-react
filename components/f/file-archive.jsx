import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/m/m40s8qb1e.css';
import '../../css/c/cgwmnbmon.css';
import '../../css/e/e2o_qwb2y.css';
import '../../css/n/n3jvmegul.css';
import '../../css/i/iljthd3mo.css';
import '../../css/a/a0o9nky4v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="m40s8qb1e"/><path class="cgwmnbmon"/><path class="e2o_qwb2y wm-shine"/><path class="n3jvmegul wm-k"/><path class="iljthd3mo wm-a"/><path class="a0o9nky4v wm-deco"/></g>`,
		"fallback": "withicons-kawaii:file-archive",
	});
}

export default Component;
