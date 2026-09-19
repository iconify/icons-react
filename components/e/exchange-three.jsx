import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/l/lvwaq0byj.css';
import '../../css/j/jc5ieqbjf.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGhvLPJbvx"><g class="ufeehvblu"><path class="lvwaq0byj"/><path class="jc5ieqbjf"/></g></mask></defs><path mask="url(#SVGhvLPJbvx)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:exchange-three",
	});
}

export default Component;
