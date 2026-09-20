import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k0o3zmben.css';
import '../../css/d/dn_h7dbug.css';
import '../../css/s/s9hvzfblf.css';
import '../../css/e/ebkr9o3it.css';
import '../../css/a/ai69p7nal.css';
import '../../css/k/kw-5oibaj.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<ellipse class="k0o3zmben"/><ellipse class="k0o3zmben"/><circle class="dn_h7dbug"/><ellipse class="s9hvzfblf"/><circle class="ebkr9o3it"/><circle class="ai69p7nal"/><circle class="kw-5oibaj"/>`,
		"fallback": "openmoji:eye",
	});
}

export default Component;
