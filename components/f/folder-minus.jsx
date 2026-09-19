import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/k/krz1plydf.css';
import '../../css/d/dv30fkbev.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGNtYAwbSA"><g class="ufeehvblu"><path class="krz1plydf"/><path class="dv30fkbev"/></g></mask></defs><path mask="url(#SVGNtYAwbSA)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:folder-minus",
	});
}

export default Component;
