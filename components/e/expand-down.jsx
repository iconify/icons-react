import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/l/l2h99cbcg.css';
import '../../css/x/xmie1ejsr.css';
import '../../css/k/k-k8-gbsm.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGynakgbDH"><g class="ufeehvblu"><path class="l2h99cbcg"/><path class="xmie1ejsr"/><path class="k-k8-gbsm"/></g></mask></defs><path mask="url(#SVGynakgbDH)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:expand-down",
	});
}

export default Component;
