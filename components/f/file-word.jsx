import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/i/i_rbvcu_z.css';
import '../../css/k/kxz6i3bvk.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGaVClCcHM"><g class="ufeehvblu"><path class="i_rbvcu_z"/><path class="kxz6i3bvk"/></g></mask></defs><path mask="url(#SVGaVClCcHM)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:file-word",
	});
}

export default Component;
