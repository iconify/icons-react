import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/g/g4rirbcmo.css';
import '../../css/u/u3e_2wb-h.css';
import '../../css/z/z284ub4xi.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGY8N6Iblf"><g class="ufeehvblu"><path class="g4rirbcmo"/><path class="u3e_2wb-h"/><path class="z284ub4xi"/></g></mask></defs><path mask="url(#SVGY8N6Iblf)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:game",
	});
}

export default Component;
