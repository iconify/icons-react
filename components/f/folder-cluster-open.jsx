import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pdm7i77zj.css';
import '../../css/k/kmqnegc2d.css';
import '../../css/c/ckfqb96yg.css';
import '../../css/v/vpbxhdc1n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pdm7i77zj"/><circle class="kmqnegc2d"/><circle class="ckfqb96yg"/><circle class="vpbxhdc1n"/>`,
		"fallback": "material-icon-theme:folder-cluster-open",
	});
}

export default Component;
