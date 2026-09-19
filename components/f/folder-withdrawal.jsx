import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/b/bcqa_q4nr.css';
import '../../css/u/ursccdz5i.css';
import '../../css/q/q3_2n5bmx.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGdNghrdfj"><g class="ufeehvblu"><path class="bcqa_q4nr"/><path class="ursccdz5i"/><path class="q3_2n5bmx"/></g></mask></defs><path mask="url(#SVGdNghrdfj)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:folder-withdrawal",
	});
}

export default Component;
