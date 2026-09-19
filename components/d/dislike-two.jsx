import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uriljrv1a.css';
import '../../css/d/d6fs7qbes.css';
import '../../css/o/o0wztzken.css';
import '../../css/a/a653qxbrc.css';
import '../../css/n/np5xaumoc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uriljrv1a"/><path clip-rule="evenodd" class="d6fs7qbes"/><path class="o0wztzken"/><path clip-rule="evenodd" class="a653qxbrc"/><path class="np5xaumoc"/></g>`,
		"fallback": "icon-park-outline:dislike-two",
	});
}

export default Component;
