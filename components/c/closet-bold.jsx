import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sjwt09onl.css';
import '../../css/x/xo-a06wvd.css';
import '../../css/b/bzx8_jbar.css';
import '../../css/g/gup1u2bvx.css';
import '../../css/a/aw0ixqbjo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sjwt09onl"/><path class="xo-a06wvd"/><path clip-rule="evenodd" class="bzx8_jbar"/><path clip-rule="evenodd" class="gup1u2bvx"/><path clip-rule="evenodd" class="aw0ixqbjo"/>`,
		"fallback": "solar:closet-bold",
	});
}

export default Component;
