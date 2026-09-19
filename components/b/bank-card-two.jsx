import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/t/tw_yk0f4z.css';
import '../../css/v/vb00zyb1i.css';
import '../../css/i/icd8z0b3b.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGEorTQdnf"><g class="ufeehvblu"><path class="tw_yk0f4z"/><path class="vb00zyb1i"/><path class="icd8z0b3b"/></g></mask></defs><path mask="url(#SVGEorTQdnf)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:bank-card-two",
	});
}

export default Component;
