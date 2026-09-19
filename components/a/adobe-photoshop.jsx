import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/m/m2blynbna.css';
import '../../css/m/mi19bcbyg.css';
import '../../css/a/alk5a23ps.css';
import '../../css/b/b0nbak58x.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG7SD0cenO"><g class="s9cl3zbei"><path class="m2blynbna"/><path class="mi19bcbyg"/><path clip-rule="evenodd" class="alk5a23ps"/><path class="b0nbak58x"/></g></mask></defs><path mask="url(#SVG7SD0cenO)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:adobe-photoshop",
	});
}

export default Component;
